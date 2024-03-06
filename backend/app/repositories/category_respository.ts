import Category from "#models/category"
import { CategoryDto } from "../dto/category.js"

export default class CategoryRepository {
    async create(data: Omit<CategoryDto, "id">) {
        const category = new Category

        category.name = data.name

        await category.save()
        return category
    }

    async update(data: CategoryDto){
        const findCategory = await Category.findOrFail(data.id) 

        findCategory.name = data.name

        await findCategory.save()
        return findCategory
    }

    async delete(id: number){
        await Category
            .query()
            .where('id', id)
            .delete()
    }
}