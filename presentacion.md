---
title: "Cuaternios"
subtitle: "Aplicación a gráficos por ordenador"
date: Álgebras, Grupos y Representaciones
institute: Universidad de Granada
author:
  - David Charte
  - Jose Carlos Entrena
  - Lothar Soto
  - Mario Román
shortauthor:
  - D. Charte
  - J.C. Entrena
  - L. Soto
  - M. Román
theme: metropolis
colortheme: metropolis
lang: spanish
polyglossia-lang.name: spanish
graphics: true
classoption:
  - compress
header-includes:
- \newcommand{\columnsbegin}{\begin{columns}}
- \newcommand{\columnsend}{\end{columns}}
- \definecolor{headbg}{RGB}{61, 96, 103}
- \definecolor{headfg}{RGB}{232, 239, 241}
- \setbeamercolor{headtitle}{fg=headfg,bg=headbg}
- \setbeamercolor{headnav}{fg=headfg,bg=headbg}
- \setbeamercolor{section in head/foot}{fg=headfg,bg=headbg}
- "\\defbeamertemplate*{headline}{miniframes theme no subsection}{
    \\begin{beamercolorbox}[ht=2.5ex,dp=1.125ex,
      leftskip=.3cm,rightskip=.3cm plus1fil]{headtitle}
      {\\usebeamerfont{title in head/foot}\\insertshorttitle}
      \\hfill
      \\leavevmode{\\usebeamerfont{author in head/foot}\\insertshortauthor}
    \\end{beamercolorbox}
    \\begin{beamercolorbox}[colsep=1.5pt]{upper separation line head}
    \\end{beamercolorbox}
    \\begin{beamercolorbox}{headnav}
      \\vskip2pt\\textsc{\\insertnavigation{\\paperwidth}}\\vskip2pt
    \\end{beamercolorbox}
    \\begin{beamercolorbox}[colsep=1.5pt]{lower separation line head}
    \\end{beamercolorbox}
  }"
- "\\defbeamertemplate*{footline}{miniframes theme no subsection}{}"
- \beamertemplatenavigationsymbolsempty
---

# Grupo de rotación

## $SO(3)$

## Ejes de rotación

## Propiedades topológicas de las rotaciones

# Ángulos de Euler

## Definición

## Descomposición

## Propiedades topológicas

## Bloqueo del cardán

# Cuaternios

## Versores

## Conexión con $SU(2)$

## Cuaternios como esfera 4-dimensional

## Recubrimiento del grupo de rotaciones

# Rotaciones con cuaternios

## Fórmulas con cuaternios

## Rotación con cuaternios

# Aplicación en gráficos

## Exponenciación de cuaternios

## Spherical Linear Interpolation (SLERP)

## Spherical and Quadrangle (SQUAD)

# Realización práctica

## El motor de gráficos Unity

## Cardán con Unity

## Uso de cuaternios
