# ⚡ Low-Latency Product Search API with Autosuggest UI

> A blazing-fast, full-stack search experience built with **Node.js** and **React**, designed to return results in under **50ms** using in-memory indexing. Features an autosuggest-style frontend with real-time search capabilities.

---

## 🔍 Use Case & Vision

This project simulates how modern e-commerce or SaaS platforms implement **instant product search**.

### ✅ Real-world relevance:
- Fast autosuggest = better UX
- Backend profiling = better engineering insight
- Scalable search logic = reusable as a service or library

---

## 🧠 Project Overview

### 🖥️ Backend (Node.js + Express)

- Loads a static product list (`products.json`)
- Builds an **in-memory search index**
- Handles `/search?q=` API calls
- Measures search latency using `perf_hooks`
- Returns results with accurate duration in milliseconds

#### 📦 Example API Call:

```bash
GET http://localhost:3000/search?q=iph
