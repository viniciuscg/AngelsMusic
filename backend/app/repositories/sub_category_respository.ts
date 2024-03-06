import SubCategory from "#models/sub_category"
import { SubCategoryDto } from "../dto/sub_category.js"

export default class SubCategoryRepository {
    async create(data: Omit<SubCategoryDto, "id">) {
        const category = new SubCategory

        category.categoryId = data.categoryId
        category.description = data.description

        await category.save()
        return category
    }

    async update(data: SubCategoryDto){
        const findSubCategory = await SubCategory.findOrFail(data.id) 

        findSubCategory.description = data.description

        await findSubCategory.save()
        return findSubCategory
    }

    async delete(id: number){
        await SubCategory
            .query()
            .where('id', id)
            .delete()
    }
}