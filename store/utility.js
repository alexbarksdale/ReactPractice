const updateObject = (oldObj, updatedProperties) => {
    return {
        ...oldObj,
        ...updatedProperties
    };
};

export default updateObject;
