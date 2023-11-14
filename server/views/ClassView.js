import ClassController from "../controllers/ClassController.js";

class ClassView {

  static async getClassByID(req, res) {
    try {
      const { class_id } = req.params;
      const results = await ClassController.getClassByID(class_id);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getClasses(req, res) {
    try {
      const results = await ClassController.getClasses();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async filterClasses(req, res) {
    try {
      const search_string = req.params.search_string;
      if (!search_string) {
        return res
          .status(400)
          .json({ error: "search_string is required as a route parameter" });
      }
      const results = await ClassController.filterClasses(search_string);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createClass(req, res) {
    try {
      const { name, subject, professor } = req.body;
      if (!name || !subject || !professor) {
        return res
          .status(400)
          .json({ error: "Name, subject, and professor are required fields." });
      }

      const results = await ClassController.createClass(
        name,
        subject,
        professor
      );
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default ClassView;
