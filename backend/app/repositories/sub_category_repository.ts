import SubCategory from "#models/sub_category"
import { CreateSubCategoryDto, UpdateSubCategoryDto } from "../dto/sub_category_dto.js"

export default class SubCategoryRepository {
  async create(data: CreateSubCategoryDto) {
    const subCategory = new SubCategory

    subCategory.description = data.description
    subCategory.categoryId = data.categoryId

    await subCategory.save()
    return subCategory
  }

  async getRelated(categoryid: number){
    return await SubCategory
      .query()
      .where('category_id', categoryid)
  }

  async getAll() {
    return SubCategory
      .query()
      .preload('category')
  }

  async delete(id: number){
    const subCategory = await SubCategory.findOrFail(id)
    await subCategory.delete()
  }

  async update(data: UpdateSubCategoryDto){
    const subCategory = await SubCategory.findOrFail(data.id) 

    subCategory.description = data.description
    subCategory.categoryId = data.categoryId || subCategory.categoryId 

    await subCategory.save()
    return subCategory
  }
}