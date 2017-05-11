TEX = pdflatex
SRC = $(wildcard *.tex)
EXE = $(patsubst %.tex,%.pdf,$(SRC))

default: $(EXE)

%.pdf: %.tex
	$(TEX) $< && $(TEX) $<
