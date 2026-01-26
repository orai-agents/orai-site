#!/usr/bin/env python3
# -*- coding: utf-8 -*-

import os
import glob

# Liste des pages SEO
pages = [
    "agents-ia-cannes.html",
    "agents-ia-nice.html",
    "agents-ia-antibes.html",
    "agents-ia-sophia-antipolis.html",
    "agents-ia-cote-d-azur.html",
    "assistant-vocal-ia.html",
    "automatisation-echanges-clients.html",
    "qualification-leads-ia.html",
    "support-client-ia-247.html",
    "agent-ia-gestion-emails.html",
    "prise-rendez-vous-automatique-ia.html",
    "assistant-commercial-ia.html",
    "agent-conversationnel-sur-mesure.html",
    "agents-ia-hotellerie.html",
    "agents-ia-conciergerie.html",
    "agents-ia-agences-immobilieres.html",
    "agents-ia-centres-formation.html",
    "agents-ia-services-b2b.html",
    "implantations-usages.html"
]

modified_count = 0

for filename in pages:
    try:
        with open(filename, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Vérifie si canonical n'existe pas déjà
        if '<link rel="canonical"' not in content:
            # Trouve la position après </title>
            title_pos = content.find('</title>')
            
            if title_pos != -1:
                # Crée la balise canonical
                canonical = f'\n    <link rel="canonical" href="https://www.orai-agents.com/{filename}">'
                
                # Insère après </title>
                new_content = content[:title_pos + 8] + canonical + content[title_pos + 8:]
                
                # Écrit le fichier
                with open(filename, 'w', encoding='utf-8') as f:
                    f.write(new_content)
                
                print(f"✓ {filename}")
                modified_count += 1
        else:
            print(f"⊘ {filename} (déjà à jour)")
    
    except FileNotFoundError:
        print(f"✗ {filename} (fichier non trouvé)")
    except Exception as e:
        print(f"✗ Erreur sur {filename}: {e}")

print(f"\n✅ {modified_count} fichiers modifiés")
