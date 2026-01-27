import React, { useState } from "react";
import api from "../services/api";
import { useNavigate } from "react-router-dom";

const CreatePortfolio = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    title: "",
    bio: "",
    email: "",
    github: "",
    linkedin: "",
    template: "creative",
    projects: [],
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const addProject = () =>
    setForm({
      ...form,
      projects: [...form.projects, { name: "", description: "", url: "" }],
    });

  const updateProject = (i, field, value) => {
    const updated = [...form.projects];
    updated[i][field] = value;
    setForm({ ...form, projects: updated });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(null);

    if (!form.name || !form.title || !form.bio || !form.email) {
      setError("Name, Title, Bio and Email are required");
      return;
    }

    try {
      setLoading(true);
      const res = await api.createPortfolio(form);
      navigate(`/portfolio/${res.slug}`);
    } catch (err) {
      setError("Failed to create portfolio");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-start p-4">
      <form
        onSubmit={handleSubmit}
        className="bg-white w-full max-w-3xl rounded-xl shadow p-6"
      >
        {/* TITLE */}
        <h2 className="text-2xl font-bold text-center mb-6">
          Create Portfolio
        </h2>

        {error && (
          <p className="text-center text-red-600 mb-4">{error}</p>
        )}

        {/* BASIC INFO */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div>
            <label className="text-sm text-gray-600">Name</label>
            <input
              name="name"
              value={form.name}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Title</label>
            <input
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">Email</label>
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>

          <div>
            <label className="text-sm text-gray-600">GitHub</label>
            <input
              name="github"
              value={form.github}
              onChange={handleChange}
              className="w-full border rounded-md p-2 mt-1"
            />
          </div>
        </div>

        {/* BIO */}
        <div className="mt-5">
          <label className="text-sm text-gray-600">Bio</label>
          <textarea
            name="bio"
            rows={3}
            value={form.bio}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>

        {/* LINKEDIN */}
        <div className="mt-5">
          <label className="text-sm text-gray-600">LinkedIn</label>
          <input
            name="linkedin"
            value={form.linkedin}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          />
        </div>

        {/* PROJECTS */}
        <div className="mt-7">
          <h3 className="text-lg font-semibold mb-3">Projects</h3>

          {form.projects.map((project, i) => (
            <div
              key={i}
              className="border rounded-md p-3 mb-3 bg-gray-50"
            >
              <input
                placeholder="Project Name"
                value={project.name}
                className="w-full border rounded p-2 mb-2"
                onChange={(e) =>
                  updateProject(i, "name", e.target.value)
                }
              />
              <textarea
                placeholder="Description"
                rows={2}
                value={project.description}
                className="w-full border rounded p-2 mb-2"
                onChange={(e) =>
                  updateProject(i, "description", e.target.value)
                }
              />
              <input
                placeholder="URL"
                value={project.url}
                className="w-full border rounded p-2"
                onChange={(e) =>
                  updateProject(i, "url", e.target.value)
                }
              />
            </div>
          ))}

          <button
            type="button"
            onClick={addProject}
            className="text-purple-600 text-sm font-medium"
          >
            + Add Project
          </button>
        </div>

        {/* TEMPLATE */}
        <div className="mt-6">
          <label className="text-sm text-gray-600">Template</label>
          <select
            name="template"
            value={form.template}
            onChange={handleChange}
            className="w-full border rounded-md p-2 mt-1"
          >
            <option value="modern">Modern</option>
            <option value="minimal">Minimal</option>
            <option value="creative">Creative</option>
          </select>
        </div>

        {/* SUBMIT */}
        <button
          type="submit"
          disabled={loading}
          className="mt-8 w-full bg-purple-600 text-white py-2.5 rounded-md text-base font-semibold hover:bg-purple-700"
        >
          {loading ? "Creating..." : "Create Portfolio"}
        </button>
      </form>
    </div>
  );
};

export default CreatePortfolio;
