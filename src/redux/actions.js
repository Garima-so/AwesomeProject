

export const GET_DATA = 'GET_DATA';

const getDataMethod = (data) => ({
    type: 'GET_DATA',
    payload: data,
});
export default getDataMethod;