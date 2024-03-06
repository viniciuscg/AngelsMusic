import { SellStatus } from "../dto/enum.js"
import { SellDto } from "../dto/sell_dto.js"
import SellRepository from "../repositories/sell_repository.js"

    export default class SellService {
        SellRepository: SellRepository

        constructor() {
            this.SellRepository = new SellRepository()
        }

        async create(data: Omit<SellDto, "id">){
            if (!data) throw new  Error('')

            return this.SellRepository.create({
                ...data,
                status: SellStatus.PROCESSING
            })
        }

        async update(data: number){
            const response: SellStatus = data as SellStatus;

            return this.SellRepository.update(response)
        }
}