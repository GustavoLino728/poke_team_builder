-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Team" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "description" TEXT,
    "userId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Team_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamPokemon" (
    "id" TEXT NOT NULL,
    "teamId" TEXT NOT NULL,
    "pokemonId" INTEGER NOT NULL,
    "nickname" TEXT,
    "position" INTEGER NOT NULL,
    "nature" TEXT,
    "item" TEXT,
    "ability" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "TeamPokemon_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "TeamPokemonMove" (
    "id" TEXT NOT NULL,
    "teamPokemonId" TEXT NOT NULL,
    "moveId" TEXT NOT NULL,
    "slot" INTEGER NOT NULL,

    CONSTRAINT "TeamPokemonMove_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Move" (
    "id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "power" INTEGER,
    "pp" INTEGER NOT NULL,
    "accuracy" INTEGER,

    CONSTRAINT "Move_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "User_username_key" ON "User"("username");

-- CreateIndex
CREATE UNIQUE INDEX "TeamPokemon_teamId_position_key" ON "TeamPokemon"("teamId", "position");

-- CreateIndex
CREATE UNIQUE INDEX "TeamPokemonMove_teamPokemonId_slot_key" ON "TeamPokemonMove"("teamPokemonId", "slot");

-- CreateIndex
CREATE UNIQUE INDEX "TeamPokemonMove_teamPokemonId_moveId_key" ON "TeamPokemonMove"("teamPokemonId", "moveId");

-- AddForeignKey
ALTER TABLE "Team" ADD CONSTRAINT "Team_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPokemon" ADD CONSTRAINT "TeamPokemon_teamId_fkey" FOREIGN KEY ("teamId") REFERENCES "Team"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPokemonMove" ADD CONSTRAINT "TeamPokemonMove_teamPokemonId_fkey" FOREIGN KEY ("teamPokemonId") REFERENCES "TeamPokemon"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "TeamPokemonMove" ADD CONSTRAINT "TeamPokemonMove_moveId_fkey" FOREIGN KEY ("moveId") REFERENCES "Move"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
