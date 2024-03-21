import {useDispatch, useSelector} from "react-redux";
import {StoreInterface} from "../store";
import {useEffect} from "react";
import {getEnvVariables, parsePagination} from "../helpers";
import {payrollApi} from "../api";
import {DepartmentInterface} from "../interfaces";
import {cleanData, setDepartment, setPageResult, setParams} from "../store/modules/administration";
import Swal from 'sweetalert2';

const {VITE_DEPARTMENT_URI} = getEnvVariables();

export const useDepartmentStore = () => {

    const departmentValues = useSelector((state: StoreInterface) => state.department);
    const dispatch = useDispatch();

    useEffect(() => {
        findAll('', 0);
    }, []);


    const findAll = async (search: string, page: number) => {
        try {
            const params = {search, page, size: 10};
            dispatch(setParams(params));
            const {data, headers} = await payrollApi.get(`${VITE_DEPARTMENT_URI}`, {params});
            const response = parsePagination<DepartmentInterface>(headers);
            response.content = data;
            dispatch(setPageResult(response));
        } catch (e) {
            console.log(e);
        }
    }

    const findById = async (code: number) => {
        try {
            const {data} = await payrollApi.get(`${VITE_DEPARTMENT_URI}/${code}`);
            dispatch(setDepartment(data));
        } catch (e) {
            console.log(e);
        }
    }

    const saveOrUpdate = async (department: DepartmentInterface) => {
        try {
            const { search, page } = departmentValues.params;
            if (department.depCodigo) {
                await payrollApi.put(`${VITE_DEPARTMENT_URI}`, department);
                await Swal.fire({
                    title: 'Registro actualizado',
                    icon: 'success'
                })
                await findAll(search, page);
                return;
            }

            const {data} = await payrollApi.post(`${VITE_DEPARTMENT_URI}`, department);
            await Swal.fire({
                title: 'Registro guardado',
                icon: 'success'
            })
            await findAll(search, page);
            dispatch(setDepartment(data));
        } catch (e) {
            console.log(e);
        }
    }

    const remove = async (code: number) => {
        try {
            const { search, page } = departmentValues.params;
            const result = await Swal.fire({
                title: '¿Desea eliminar el registro?',
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#689f38',
                confirmButtonText: 'Confirmar',
                cancelButtonColor: "#FF0000FF",
                cancelButtonText: 'Cancelar',
            });
            if (result.isDismissed) {
                return;
            }
            await payrollApi.delete(`${VITE_DEPARTMENT_URI}/${code}`);
            await Swal.fire({
                title: 'Registro eliminado',
                icon: 'success'
            });
            await findAll(search, page);
        } catch (e) {
            console.log(e);
        }
    }

    const cleanForm = () => {
        dispatch(cleanData());
    }


    return {
        ...departmentValues,
        departmentValues,
        findAll,
        findById,
        saveOrUpdate,
        remove,
        cleanForm
    }
}