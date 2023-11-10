import ClassController from "../controllers/ClassController.js";

class ClassView{
    static async createClass(req, res){
        try {
            const {name, subject, professor} = req.body

            if (!name || !subject || !professor) {
                return res.status(400).json({ error: 'Name, subject, and professor are required fields.' });
            }

            const results = await ClassController.createClass(name,subject,professor)
            res.status(200).json(results)

        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }

    static async getClasses(req, res) {
        try {
            const results = await ClassController.getClasses()
            res.status(200).json(results)
        } catch (error) {
            res.status(500).json({ error: error.message })
        }
    }
}

export default ClassView