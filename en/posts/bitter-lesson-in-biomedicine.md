---
title: The Bitter Lesson Is Knocking on Biomedicine's Door
date: 2026-08-25
---

# The Bitter Lesson Is Knocking on Biomedicine's Door

In 2019, Richard Sutton—one of the founding fathers of reinforcement learning—wrote a short essay of just over a thousand words titled *The Bitter Lesson*. Its conclusion is stark and simple: throughout seventy years of AI history, every attempt to "hand-craft" human knowledge, intuition, and understanding of a problem's structure into systems has been gratifying in the short term, but in the long run has invariably been crushed by **general-purpose methods that scale with compute**. There are only two things that can scale without limit—**search** and **learning**. The lesson is "bitter" because time and again it negates what researchers hold most dear: our deep understanding of the problem itself.

Chess was like this (Deep Blue's brute-force search beat carefully encoded chess theory), Go was like this (AlphaGo's self-play learning beat human joseki), speech recognition was like this (statistics and deep learning beat linguists' phoneme rules), and computer vision was like this too (learned features beat hand-designed SIFT and HOG). Sutton's admonition is this: what we should really build into systems is not the content of knowledge we believe to be correct, but the **meta-methods capable of discovering and capturing complexity by themselves**.

I am increasingly convinced that this bitter lesson is now knocking on the door of biomedical R&D. And no field is more suited to serve as the last bastion of the "human-knowledge-driven" paradigm—precisely why its collapse will hit even harder.

## Drug Discovery: The Last Temple of Humanism in Knowledge

If there is any field that worships "understanding the mechanism" as its highest faith, it is biomedicine. The entire paradigm of modern drug discovery rests on a hypothesis-driven, mechanism-based logical chain: understand the molecular mechanism of disease, lock onto a causal target, resolve its three-dimensional structure, and let medicinal chemists rely on years of trained intuition to rationally design molecules that bind precisely. Every step is a triumph of human intelligence, and behind every successful drug lies a story a textbook could hold—"we finally understood why."

This paradigm has produced Nobel Prizes, and it has also produced countless expensive failures. Its vulnerability lies precisely in its pride: it demands that we **understand first**, before we act. But the complexity of biological systems far exceeds any causal model the human brain can accommodate. The collapse of countless Phase II trials is, at bottom, the same sentence—"the mechanism looks beautiful, but the organism says no." We think we understood, but we had only understood a shadow that was radically simplified and clipped by our cognitive bandwidth.

This is exactly the state Sutton described: embedding human understanding of a problem's structure into systems affords intellectual satisfaction, yet in the long run sets the ceiling.

## AlphaFold: The First Crack

The protein-folding problem is the clearest window onto this paradigm shift. For decades, the mainstream approach to structure prediction was physics-driven—with Rosetta as the exemplar, people condensed every bit of physical knowledge about chemical bonds, van der Waals forces, electrostatic interactions, and solvation effects into an elegant energy function, then searched for the conformation of lowest energy. This is the epitome of human intellectualism: we understand physics, therefore we can predict folding.

Then AlphaFold2 arrived. It barely encodes a single law of physics explicitly; it merely learns the statistical relationship between sequence and structure from protein databases, aided by attention mechanisms—a general architecture that scales with compute. At the CASP competition, it left decades of accumulated physics-based approaches far behind, and practically ended a problem that was thought to need several more decades.

This was a textbook replay of the bitter lesson: **learning + compute defeated human-encoded domain knowledge.** And the most telling detail is this—AlphaFold can predict how a protein folds, yet does not "understand" why it folds that way. It gives the answer, but not the mechanistic explanation we traditionally crave. It works, but it is silent.

Protein structure is merely the first crack. The same pattern is spreading everywhere: generative chemistry models "search" molecular space and find scaffolds human chemists would never have imagined; protein language models (such as the ESM family) capture function, stability, and even evolutionary constraints from vast sequences alone; and foundation models of cells, genomes, and transcriptomes try to learn the "grammar" of an organism directly from data, without us writing the rules in advance. Everywhere, it is the same story: fewer prior assumptions, more data and compute.

## But Biology Isn't Go—And That Is Exactly the Point

Honestly, to announce the death of mechanistic research by mechanically copying Sutton's logic would be lazy optimism. Between biomedicine and Go lies one decisive difference, and only by seeing this difference can we see where the real paradigm shift happens.

Go and chess have a perfect, free, infinitely callable "simulator"—the rules of the game themselves. AlphaGo could play millions of games of self-play overnight, so search and learning could scale without limit. But biology's "simulator" is the cell, the organ, the living organism; every "query" against it is slow, expensive, noisy, and irreproducible. In drug discovery, **compute is cheap, while what is truly scarce is high-quality experimental data.**

This means the bitter lesson will not descend upon biomedicine in its original form—instead, it will **shift its point of application**. The two things Sutton said to scale are search and learning; in biology, the scarcest, and therefore the most worth scaling, is **the capacity to generate data itself**. So the real frontier is no longer a smarter model, but industrializing, automating, and closing the loop on wet-lab work—automated laboratories, robotic platforms, and "lab-in-the-loop" active-learning systems where AI does more than analyze data but **actively designs the next batch of experiments** to fill in the places where it is most uncertain.

In other words, the prescription the bitter lesson hands to biomedicine is this: stop hand-stuffing your precious mechanistic intuitions into models one by one, and instead build a **self-extending data flywheel**—a closed-loop system that keeps searching molecular space, keeps validating on real biological systems, and learns to optimize the next step. Whoever builds that flywheel will turn biology from a "science of understanding" into an "engineering of searchable, learnable systems."

## What the Paradigm Shift Means

If this judgment holds, then what we are experiencing is not an upgrade of tools, but a replacement of epistemology.

**From "understand first, then design" to "search and learn first; understanding is optional."** The old paradigm demanded causal mechanism as a precondition of action; the new paradigm lets us find effective molecules and effective interventions before full understanding, with mechanism becoming an optional byproduct—even something that emerges from the model in reverse. This is the same situation as using a neural network that works but cannot be fully explained.

**From the individual genius to the scalable system.** The hero of the old paradigm is the star medicinal chemist with a mysterious "touch." The core assets of the new paradigm are the combination of data, compute, automated platforms, and general algorithms. The irreproducible intuition of an individual gives way to reproducible, scalable, iterable systems.

**From hypothesis-driven to scale-driven.** This runs against the training of generations of researchers more than anything else. We were taught to pose elegant hypotheses and run decisive control experiments. The bitter lesson reminds us coldly: in a system too complex for the bandwidth of the human mind, a crude method that can search a vast space efficiently and learn from each round of feedback will eventually beat any elegant but narrow clever hypothesis.

## Bitter, Still Bitter

The reason this transformation is doomed to be bitter is no different from seventy years ago—it demands we set down the thing we are most proud of.

The entire value system of biomedicine is built on "understanding why." We crave mechanism not merely out of curiosity, but because regulation, safety, and ethics all require us to explain why a drug works and why it is safe. When the most effective drug in the future comes from a system we do not fully understand, when "it works, but it is silent" becomes the norm, the entire industry—from scientists' professional identity, to the FDA's review framework, to our definition of "what counts as scientific knowledge"—will be forced to renegotiate.

But Sutton's lesson also holds a humility that should not be overlooked: admitting that our minds cannot accommodate the true complexity of biological systems is not a failure of science, but a deeper scientific honesty. What we must do is not carve our limited understanding into machines over and over, but build methods **capable of discovering the complexity we cannot yet comprehend**.

The next era of drug discovery may belong not to the person who understands biology best, but to the one who first admits "we actually don't understand it well enough," and on that basis builds the flywheel of search and learning.

This is the bitter lesson—and it has never missed a field that believed it was the exception.