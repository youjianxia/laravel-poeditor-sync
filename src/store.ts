import { reactive } from 'vue'

interface User {
    id?: number;
    name: string;
    email: string;
}
const user : User = {id: 1, name: 'Rene', email: 'renecms@gmail.com'};

export const store = reactive({
    appBarTitle: "Home",
    user,
    loggedIn: true,
    changeAppBarTitle(newTitle: string) {
        this.appBarTitle = newTitle;
    },
    changeUser(newUser: User) {
        this.user = newUser;
        this.loggedIn = true;
    },
    logout() {
        this.user = {id: undefined, name: '', email: ''};
 