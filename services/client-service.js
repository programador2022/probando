
const createProduct = async (jsonProduct) => {
    try {
        const response = await fetch(`https://programador2022.github.io/productos/productos.json`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: jsonProduct
        });
        return response.json;
    } catch (error) {
        return console.log(error);
    }
}

const readProducts = () => fetch('https://programador2022.github.io/productos/productos.json').then(response => response.json());

const readProduct = (id) => fetch(`https://programador2022.github.io/productos/productos.json/${id}`).then(response => response.json());

const deleteProduct = (id) => {
    return fetch(`/${id}`, {
        method: 'DELETE'
    });
};

const updateProduct = (id, jsonProduct) => {
    return fetch(`https://programador2022.github.io/productos/productos.json/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: jsonProduct
    })
    .then(response => response.json)
    .catch(error => console.log(error))
}


export const clientService = {
    createProduct,
    readProducts,
    readProduct,
    updateProduct,
    deleteProduct,
};