import sqlite3
import json
from typing import List, Dict, Any
from core.models import RiskCategory

class KnowledgeGraph:
    def __init__(self, db_path: str = "kbelir_graph.db"):
        self.db_path = db_path
        self._init_db()

    def _init_db(self):
        conn = sqlite3.connect(self.db_path)
        cursor = conn.cursor()
        
        # Create Tables for mapping relationships
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS risk_categories (
                id TEXT PRIMARY KEY,
                description TEXT,
                regulatory_approach TEXT
            )
        ''')
        
        cursor.execute('''
            CREATE TABLE IF NOT EXISTS professions (
                name TEXT PRIMARY KEY,
                regulator TEXT,
                scope_json TEXT
            )
        ''')
        
        # Seed initial Risk Categories from the mandate
        self._seed_initial_risk_categories(cursor)
        
        conn.commit()
        conn.close()
        
    def _seed_initial_risk_categories(self, cursor):
        # A, B, C, D Risk categories from prompt
        categories = [
            ("A", "Low-risk work (Minor residential, Small structures)", "Appropriately qualified technicians or lower professional categories"),
            ("B", "Ordinary buildings (Normal residential, Commercial)", "Appropriately registered professionals according to discipline"),
            ("C", "Complex buildings (Hospitals, High-rise)", "Mandatory multidisciplinary professional involvement"),
            ("D", "Critical or high-consequence projects (Airports, Major infrastructure)", "Enhanced competency, independent checking, peer review and higher insurance")
        ]
        cursor.executemany("INSERT OR IGNORE INTO risk_categories (id, description, regulatory_approach) VALUES (?, ?, ?)", categories)

    def get_risk_categories(self) -> List[Dict[str, Any]]:
        conn = sqlite3.connect(self.db_path)
        conn.row_factory = sqlite3.Row
        cursor = conn.cursor()
        cursor.execute("SELECT * FROM risk_categories")
        rows = cursor.fetchall()
        conn.close()
        return [dict(row) for row in rows]
