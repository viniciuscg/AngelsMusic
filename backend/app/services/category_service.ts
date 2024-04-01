import { CategoryDto, CreateCategoryDto } from "../dto/category_dto.js"
import CategoryRepository from "../repositories/category_respository.js"

export default class CategoryService {
  categoryRepository: CategoryRepository

  constructor() {
    this.categoryRepository = new CategoryRepository()
  }
  async create(data: CreateCategoryDto){
    const category = await this.categoryRepository.create(data)
    return category
  } 

  async update(data: CategoryDto){
    return this.categoryRepository.update(data)
  }

  async delete(id: number){
    this.categoryRepository.deleteCategory(id)
  }
  
  async getAll() {
    return await this.categoryRepository.getAll()
  } 

}


