TEX = xelatex
SH = source-highlight
SRC = representaciones.tex
EXE = $(patsubst %.tex,%.pdf,$(SRC)) presentacion.pdf
TEXFLAGS = -shell-escape

default: $(EXE)

%.pdf: %.tex euler.tex cuaternios.tex
	$(TEX) $(TEXFLAGS) $< && $(TEX) $(TEXFLAGS) $<

presentacion.pdf: presentacion.md
	pandoc $< -o $@ -t beamer -s --latex-engine xelatex

clean:
	rm -rf $(EXE) _minted* *.log *.aux *.toc
