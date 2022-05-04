CREATE TABLE BRANAS.ITEM(
    ID_ITEM INT PRIMARY KEY NOT NULL,
    CATEGORY TEXT NOT NULL,
    DESCRIPTION TEXT NOT NULL,
    PRICE INT NOT NULL,
    WIDTH INT NOT NULL,
    HEIGHT INT NOT NULL,
    LENGTH INT NOT NULL,
    WEIGHT INT NOT NULL
);
INSERT INTO BRANAS.ITEM (
        ID_ITEM,
        CATEGORY,
        DESCRIPTION,
        PRICE,
        WIDTH,
        HEIGHT,
        LENGTH,
        WEIGHT
    )
VALUES (
        1,
        'Instrumentos Musicais',
        'Guitarra',
        1000,
        100,
        30,
        10,
        3
    ),
    (
        2,
        'Instrumentos Musicais',
        'Amplificador',
        5000 100,
        50,
        50,
        20
    ),
    (
        3,
        'Acessórios',
        'Cabo',
        30,
        10,
        10,
        10,
        1
    );