TEX = xelatex
SH = source-highlight
SRC = representaciones.tex
EXE = $(patsubst %.tex,%.pdf,$(SRC))
TEXFLAGS = -shell-escape

default: $(EXE)

%.pdf: %.tex euler.tex cuaternios.tex
	$(TEX) $(TEXFLAGS) $< && $(TEX) $(TEXFLAGS) $<

#%.tex: %.js
#	$(SH) -i $< -o $@ -f latexcolor

clean:
	rm -rf $(EXE) _minted* *.log *.aux *.toc
