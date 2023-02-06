export default class ItemController {
     _services;

    constructor(services) {
        this._services = services;
    }

    async getAllItems(_req, res) {
        try {
            const result = await this._services.getAllQuestions();
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message});
            console.error(error);
        }
    }

    async getItemById (req, res) {
        const { id } = req.params;
        try {
            console.log(id);
            const result = await this._services.getItemById(id);
            res.status(200).json(result);
        } catch (error) {
            res.status(400).json({ message: error.message });
            console.error(error);
        }
    }

    async createNewItem (req, res) {
        try {
            const createdItem = await this._services.createNewItem(req.body);
            res.status(200).json({ message: 'Item created succesfully.', questionId: createdItem.id });
        } catch(error) {
            res.status(400).json({ message: error.message });
            console.error(error);
        }
    }

    async updateItemById (req, res) {
        try {
            const { id } = req.params;
            await this._services.updateItemById(id, req.body);
            res.status(200).json({ message: 'Question updated succesfully.' });
        } catch(error) {
            res.status(400).json({ message: error.message });
            console.error(error);
        }
    }

    async deleteItemById (req, res) {
        try {
            const { id } = req.params;
            await this._services.deleteItemById(id);
            res.status(200).json({ message: 'Item deleted succesfully.' });
        } catch(error) {
            res.status(400).json({ message: error.message });
            console.error(error);
        }
    }
}