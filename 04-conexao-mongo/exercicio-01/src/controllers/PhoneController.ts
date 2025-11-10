import { Request, Response } from "express";
import PhoneModel from "../models/Phone";

class PhoneController {
	public async create(req: Request, res: Response) {
		const { person, number } = req.body;
		try {
			const newPhone = new PhoneModel({ person, number });
			const response = newPhone.save();
			return res.status(201).json(response);
		} catch (error: any) {
			if (error.code == 11000 || error.code == 11001) {
				return res.send({ message: "Essse número pertence a outro usuario" });
			}
			return res.send({ message: error });
		}
	}

	public async list(req: Request, res: Response) {
		try {
			const listPhone = await PhoneModel.find();
			return res.json(listPhone);
		} catch (error) {
			return res.json({ message: error });
		}
	}

	public async put(req: Request, res: Response) {
		const { id } = req.params;
		const { person, number } = req.body;
		try {
			await PhoneModel.findByIdAndUpdate(id, { person, number });
			return res.json({ message: `Dados atualizado para ${person} e ${number}` });
		} catch (error) {
			return res.json({ message: error });
		}
	}

	public async delete(req: Request, res: Response) {
		const { id } = req.params;
		try {
			await PhoneModel.findByIdAndDelete(id);
			return res.json({ message: "Telefone deletado com sucesso!" });
		} catch (error) {
			return res.json({ message: error });
		}
	}
}

export default new PhoneController();
