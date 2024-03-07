import { SellStatus } from "../dto/enum.js"
import { CreateSellDto, GetSellDto, UpdateSellDto } from "../dto/sell_dto.js"
import SellRepository from "../repositories/sell_repository.js"

export default class SellService {
    sellRepository: SellRepository

    constructor() {
        this.sellRepository = new SellRepository()
    }

    async create(data: CreateSellDto){
        if (!data) throw new  Error('')

        return this.sellRepository.create({
            ...data,
            status: SellStatus.PROCESSING
        })
    }

    async update(data: UpdateSellDto ){
        const response: SellStatus = data.status as SellStatus;
        return this.sellRepository.update(response)
    }
    
    async get(data: GetSellDto) {
        return this.sellRepository.get(data.id)
    }
}