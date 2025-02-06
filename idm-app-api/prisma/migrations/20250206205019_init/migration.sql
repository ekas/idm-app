-- CreateTable
CREATE TABLE "DataClassificaion" (
    "id" SERIAL NOT NULL,
    "text" TEXT NOT NULL,
    "classifier" TEXT NOT NULL,

    CONSTRAINT "DataClassificaion_pkey" PRIMARY KEY ("id")
);
