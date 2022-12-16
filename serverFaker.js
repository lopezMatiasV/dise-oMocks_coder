import express from "express";
const app = express();
const port = process.env.PORT || 8080;

import faker from "faker";
faker.locale = "es";

let id = 1
const newId = () => {
    return id++
}

const userRandom = (id) => {
    return {
		id,
		nombre: faker.name.firstName(),
		apellido: faker.name.lastName(),
		color: faker.commerce.color(),
	};
}

const cantResult = (cant) => {
    const result = []
    for (let i = 0; i < cant; i++) {
        result.push(userRandom(newId()))
    }
    return result
}

app.get("/test", (req, res) => {
    let {cant} = req.query
	cant ? cant : cant = 3
    res.json(cantResult(cant))
});

app.listen(port, () =>
	console.log(`
    Server active in port ${port}
    link: http://localhost:${port}`)
);