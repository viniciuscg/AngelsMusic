import Category from "#models/category"
import { CategoryDto } from "../dto/category_dto.js"

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

  async deleteCategory(id: number){
    const user = await Category.findOrFail(id)
    await user.delete()
  }
  
  async getAll() {
    return await Category.all()
  }

}