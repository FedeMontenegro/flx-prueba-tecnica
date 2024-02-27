const useForm = () => {

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    }

    return {
        onFinishFailed,
    }
}

export default useForm