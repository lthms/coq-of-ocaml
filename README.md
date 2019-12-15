# ![Logo](https://raw.githubusercontent.com/clarus/icons/master/abc-48.png) CoqOfOCaml
> Compile OCaml to Coq.

[![travis status](https://img.shields.io/travis/clarus/coq-of-ocaml/master.svg?label=travis-ci)](https://travis-ci.org/clarus/coq-of-ocaml)

**Online examples on https://clarus.github.io/coq-of-ocaml/**

Start with the file `main.ml`:
```ocaml
type 'a tree =
  | Leaf of 'a
  | Node of 'a tree * 'a tree

let rec sum tree =
  match tree with
  | Leaf n -> n
  | Node (tree1, tree2) -> sum tree1 + sum tree2
```

Run:
```
coq-of-ocaml main.ml
```

Get a file `main_ml.v`:
```coq
Require Import OCaml.OCaml.

Local Open Scope Z_scope.
Local Open Scope type_scope.
Import ListNotations.

Inductive tree (a : Type) : Type :=
| Leaf : a -> tree a
| Node : (tree a) -> (tree a) -> tree a.

Arguments Leaf {_}.
Arguments Node {_}.

Fixpoint sum (tree : tree Z) : Z :=
  match tree with
  | Leaf n => n
  | Node tree1 tree2 => Z.add (sum tree1) (sum tree2)
  end.
```

## Install
### Latest stable version
Using the package manager [opam](https://opam.ocaml.org/), add the [Coq repository](http://coq.io/opam/):

    opam repo add coq-released https://coq.inria.fr/opam/released

and run:

    opam install coq-of-ocaml

### Current development version
Clone the repository and run:
```
opam pin add coq-of-ocaml .
```

### Manually
Read the `.opam` file at the root of the project to know the dependencies to install and get the list of commands to build the project.

## Usage
CoqOfOCaml compiles the `.ml` or `.mli` files using [Merlin](https://github.com/ocaml/merlin) to understand the dependencies of a project. One first needs to have a compiled project with a working configuration of Merlin. The basic command is:
```
coq-of-ocaml file.ml
```

If this does not work as expected, you may specify the path to the `.merlin` file:
```
coq-of-ocaml -merlin src/.merlin path/file.ml
```

You can start to experiment with the test files in `tests/`.

## License
MIT © Guillaume Claret.
