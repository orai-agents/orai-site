#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import glob

# Texte à rechercher
search_text = '<p><a href="agences-partenaires.html">Agences partenaires</a></p>'

# Texte de remplacement (avec le nouveau lien ajouté)
replace_text = '''<p><a href="agences-partenaires.html">Agences partenaires</a></p>
                    <p><a href="implantations-usages.html">Implantations & usages</a></p>'''

# Liste tous les fichiers HTML
html_files = glob.glob("*.html")

modified_count = 0

for filename in html_files:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Vérifie si le lien n'existe pas déjà
        if 'implantations-usages.html' not in content:
            # Remplace
            new_content = content.replace(search_text, replace_text)
            
            # Écrit le fichier modifié
            with open(filename, 'w', encoding='utf-8') as f:
                f.write(new_content)
            
            print(f"✓ {filename}")
            modified_count += 1
        else:
            print(f"⊘ {filename} (déjà à jour)")
    
    except Exception as e:
        print(f"✗ Erreur sur {filename}: {e}")

print(f"\n✅ {modified_count} fichiers modifiés sur {len(html_files)}")
