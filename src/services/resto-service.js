export default class RestoService {
    _apiBase = 'https://zvendinov.ru/Delivery/server.php'

    async getMenuItems() {
        const res = await fetch(`${this._apiBase}`),
            json = await res.json();
        if (!res.ok) throw new Error(`Could not fetch, received ${res.status}`);
        return await json.menu
    }
}
