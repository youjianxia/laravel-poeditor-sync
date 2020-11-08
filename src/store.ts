import { reactive } from 'vue'

interface User {
    id?: number;
    name: string;
    email: string;
}
const user : User = {id: 1, name: 'Rene', email: 'renecms@gmail.com'};

export const store = reactive({
    appBarTitle: "Hom