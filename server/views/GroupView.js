import GroupController from "../controllers/GroupController.js";

class GroupView {
  static async getStudyGroupById(req, res) {
    try {
      const group_id = parseInt(req.params.group_id);
      const results = await GroupController.getStudyGroupById(group_id);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async getStudyGroups(req, res) {
    try {
      const results = await GroupController.getStudyGroups();
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async filterGroups(req, res) {
    try {
      const search_string = req.params.search_string;
      if (!search_string) {
        return res
          .status(400)
          .json({ error: "search_string is required as a route parameter" });
      }
      const results = await GroupController.filterGroups(search_string);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async createStudyGroup(req, res) {
    try {
      const { name, location, time, description, class_id } = req.body;

      if (!name || !location || !time) {
        return res
          .status(400)
          .json({ error: "Name, location, and time are required fields." });
      }

      const results = await GroupController.createStudyGroup(
        name,
        location,
        time,
        description,
        class_id
      );
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async updateStudyGroup(req, res) {
    try {
      const { groupId, name, location, time, description } = req.body;
      const results = await GroupController.updateStudyGroup(
        groupId,
        name,
        location,
        time,
        description
      );
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  static async deleteStudyGroup(req, res) {
    try {
      const { groupId } = req.body;

      if (!groupId) {
        return res.status(400).json({ error: "GroupId is a required field." });
      }

      const results = await GroupController.deleteStudyGroup(groupId);
      res.status(200).json(results);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
}

export default GroupView;
