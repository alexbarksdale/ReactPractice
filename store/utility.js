const updateObject = (oldObj, updatedProperties) => {
        console.log('HI');
    return {
        ...oldObj,
        ...updatedProperties
    };
};


export default updateObject;
