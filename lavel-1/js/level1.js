const getValue = (id) => {
    const field = document.getElementById(id);
    const Value = field.value;
    field.value = '';
    return Value;
}

const removeItem = (item) => {
    localStorage.removeItem(item)
}

const addName = () => {
    const nameValue = getValue('name-field')

    localStorage.setItem('name', nameValue);


}

const ageAdd = () => {
    const ageValue = getValue('age-field');
    localStorage.setItem('age', ageValue);

}

const removeName = () => {
    removeItem('name')
}
const removeAge = () => {
    removeItem('age')
}
