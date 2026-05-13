import AsyncStrorage from '@react-native-async-storage/async-storage'
import { FilterStatus } from "@/types/FilterStatus"

const ITENS_STORAGE_KEY = '@listacompras:itens'

export type ItemStorage = {
    id: string,  // sequencia randomica de caracteres
    status: FilterStatus,
    description: string
}

// função base para consulta de dados
async function get(): Promise<ItemStorage[]> {
    try {
        const storage = await AsyncStrorage.getItem(ITENS_STORAGE_KEY)
        return storage ? JSON.parse(storage) : []
    } catch (error) {
        throw new Error("ITEM_GET: " + error)
    }
}

// função base para salvar todos os dados
async function save(itens: ItemStorage[]): Promise<void> {
    try {
        await AsyncStrorage.setItem(ITENS_STORAGE_KEY, JSON.stringify(itens))
    } catch (error) {
        throw new Error("ITEM_SAVE: " + error)
    }
}