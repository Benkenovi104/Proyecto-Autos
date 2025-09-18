-- Insertar roles básicos
INSERT INTO "Rol" (nombre) VALUES 
('Admin'),
('Usuario'),
('Tecnico')
ON CONFLICT DO NOTHING;

-- Verificar los roles creados
SELECT * FROM "Rol";