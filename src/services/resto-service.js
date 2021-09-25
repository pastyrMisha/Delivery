export default class RestoService {
    _apiBase = 'https://zvendinov.ru/Delivery/server.php'

    async getResource(url) {
        const res = await fetch(`${this._apiBase}${url}`);

        if (!res.ok) {
            console.log('sddsdds');
            throw new Error(`Could not fetch ${url}` + 
            `, received ${res.status}`);
        }
        return await res.json();
    }
        async getMenuItems() {
            return await this.getResource(`/menu/`);
        }
}