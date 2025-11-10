import { Request, Response } from "express";
import Person from "../models/Person";

class PersonController {
	public async create(req: Request, res: Response) {
		const { name } = req.body;
		try {
			const newPerson = new Person({ name });
			const response = await newPerson.save();
			return res.status(201).json(response);
		} catch (error) {
			return res.json({ message: error });
		}
	}

	public async list(req: Request, res: Response) {
		try {
			const listPerson = await Person.find();
			return res.json(listPerson);
		} catch (error) {
			return res.json({ message: error });
		}
	}

	public async put(req: Request, res: Response) {
		const { id } = req.params;
		const { name } = req.body;
		try {
			await Person.findByIdAndUpdate(id, { name });
			return res.json({ message: `Usario atualizado para ${name}` });
		} catch (error) {
			return res.json({ message: error });
		}
	}

	public async delete(req: Request, res: Response) {
		const { id } = req.params;
		try {
			await Person.findByIdAndDelete(id);
			return res.json({ message: "Usuario deletado com sucesso!" });
		} catch (error) {
			return res.json({ message: error });
		}
	}
}

export default new PersonController();
