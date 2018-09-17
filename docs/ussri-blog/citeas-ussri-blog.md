# CiteAs.org: Discovering and Improving software requests for citation

> **tl;dr**: [CiteAs.org](https://citeas.org) links between pieces of software and their requested citations. Go from the name of a piece of software, it's language page URL, or a DOI directly to the machine-readable meta (e.g. BibTex, Zotero auto-import) for the citation the author wants you to use. Funded by the Digital Science program at the Sloan Foundation (Grant Number 8028), conceived and developed by Heather Piwowar and Jason Priem at [ImpactStory](https://impactstory.org), together with [James Howison](http://james.howison.name) from the Information School at the University of Texas at Austin.

**Great software work ⟶ Clear requests for citation ⟶ More visibility in publications ⟶ More credit ⟶ Better Software ⟶ Better Science**

Software very rarely contains citation information, and when it does it is certainly not as obvious as it is in a paper. With a paper if you have the paper you have the metadata right there in front of you. Take the first page of [Howison and Bullard, 2013](http://doi.org/10.1002/asi.23538), which found that less than half of the times in which publications actually mentioned software were formal, traceable, citations.

![image: a citation.](an_article_citation.png)

But if you have a piece of software, you very likely don't have the metadata needed to cite it. In part this is because with software there is no standard place to "write" the information, but it's also because authors sometimes want their users to cite something other than the piece of software directly. Examples include citing a paper that introduces the software (or demonstrated its potential), a published software manual or book, a "software paper" created specifically as a citation target, or a benchmarking paper.

Great work is being done to guide best practices (including the [FORCE11 Working Group on Software Citation](https://www.force11.org/group/software-citation-working-group)) which recommends always including a direct citation to the software itself, including version numbers---something key for reproducibility---in addition to papers. We don't disagree, but we think it's important to let the authors decide how their contribution should be acknowledged and to link users with those requests.

One approach to making this link is to create a new standard format and location to make clear requests, such as including a free text request in a [https://www.software.ac.uk/blog/2016-10-06-encouraging-citation-software-introducing-citation-files](CITATION file) or a machine readable set of requests in a [CodeMeta](https://codemeta.github.io/) or [CITATION.ccf](https://github.com/citation-file-format/citation-file-format) file. These have the advantage of being easy to locate and read, but the disadvantage of requiring everyone to adopt a new practice before this approach can work.

We know that people already make requests for citation in a whole range of places, including requests on project web-pages that provide `bibtex` or DOIs, metadata associated with DOIs or repositories (such as Github and Gitlab), and in language specific formats (such as R's `citation()` method which reads from a `DESCRIPTION` file).

CiteAs includes a web-scraper which seeks out requests wherever they might be, following a set of logical rules based on how we've seen people ask for a citation. We ask users to start with something they know about the software, such as the project name, a project "landing page" (e.g., [SciPy's requests for citations](https://www.scipy.org/citing.html)), or a project's repository URL. We then have plugins arranged in a sequence that obtain data from out on the web and seek the best citation request, prioritizing metadata by its imputed intentionality, such as `CITATION.ccf`, `CITATION`, `citation()` calls, `DOAP` metadata, and metadata registered associated with a DOI (e.g., [Zenodo's software DOIs](http://about.zenodo.org/principles/)). Of medium priority is metadata discovered through natural language requests on webpages (such as `bibtex` or other formats on landing pages). Finally we fall back to creating a simple citation to a repository or even web-page.

We want to discover and honor author's requests and simultaneously educate authors about how to make clearer or more specific citation requests, encouraging them to make use of more expressive formats. We do that by showing our discovery process and highlighting missing, higher intentionality, opportunities to make requests.

## Examples

TBD: use examples at

## Challenges and next steps

### Locating requests

Eventually we plan to incorporate an additional source: the manner in which packages are already being mentioned in publications. We plan to obtain this through machine learning of the literature ("entity recognition" for software). Towards this at [Softcite Dataset](https://github.com/howisonlab/softcite-dataset) we have trained content analytic coders labeling a randomly chosen set of publications. Using that system we plan to add "Here's your current request and here's how we see your software mentioned in the literature. If you'd like to change those practices you could start with a clear, standardized, machine-readable request".

### Presenting information

We have encountered plenty of challenges in presenting the requests of a CiteAs query to realize the educational element, including visualizing the search process, dealing with finding multiple different requests. We considered allowing users to "claim" their project and then to mark their preferred citation, but we want to improve existing infrastructure, rather than become infrastructure ourselves. The system will therefore make recommendations about how to write clearer requests that everyone can read, rather than host those requests onsite.

### Sustainability

CiteAs faces a key challenges that any grant-funded piece of software faces: how to continue after the end of the grant. Handling "bit rot" (or ["software collapse"](http://blog.khinsen.net/posts/2017/01/13/sustainable-software-and-reproducible-research-dealing-with-software-collapse/)) will be a challenge, but in addition any web-hosted service has on-going financial needs for server space. Our by-no-means-perfect approach is to demonstrate the feasibility of the approach and seek partners to whom to pass off the service.

## Please try CiteAs and report issues

We would love to hear your experiences with the service. We are especially interested in hearing about requests that CiteAs is not currently finding, as well as feedback on the presentation of the results, and the position of CiteAs within the ecosystem of related services.  Report issues on our [github issues page](https://github.com/Impactstory/citeas-webapp/issues).

**Great software work ⟶ Clear requests for citation ⟶ More visibility in publications ⟶ More credit ⟶ Better Software ⟶ Better Science**
