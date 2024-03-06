import Admin from "#models/admin";
import { AdminDto } from "../dto/admin_dto.js";

export default class AdminRepository {
    async create(adm: Omit<AdminDto, "id">) {
        const admin = new Admin

        admin.email = adm.email
        admin.password = adm.password

        await admin.save()
        return admin
    }

    async update(admin: AdminDto){
        const findAdm = await Admin.findOrFail(admin.id) 

        findAdm.email = admin.email
        findAdm.password = admin.password

        await findAdm.save()
        return findAdm
    }

    async delete(id: number){
        await Admin
            .query()
            .where('id', id)
            .delete()
    }
}