import express from "express";
const app = express();
const port = process.env.PORT || 8080;

const nombres = ["Luis", "Lucía", "Juan", "Augusto", "Ana"];
const apellidos = ["Pieres", "Cacurri", "Bezzola", "Alberca", "Mei"];
const colores = ["rojo", "verde", "azul", "amarillo", "magenta"];

const elementRandom = (array) => {
	return array[Math.floor(array.length * Math.random())];
};

const userRandom = () => {
    return {
		nombre: elementRandom(nombres),
		apellido: elementRandom(apellidos),
		color: elementRandom(colores),
	};
}

const cantResult = (cant) => {
    const result = []
    for (let i = 0; i < cant; i++) {
        result.push(userRandom())
    }
    return result
}

app.get("/test", (req, res) => {
	//res.send(elementRandom(nombres));
	/* let result = {
		nombre: elementRandom(nombres),
		apellido: elementRandom(apellidos),
		color: elementRandom(colores),
	}; 
	res.json(result); */
    let { cant } = req.query
    cant ? cant : cant = 10
    res.json(cantResult(cant))
});

app.listen(port, () =>
	console.log(`
Server active in port ${port}
link: http://localhost:${port}`)
);
