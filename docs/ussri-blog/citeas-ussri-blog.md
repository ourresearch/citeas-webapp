# CiteAs.org: Discovering and Improving software requests for citation

- James Howison, [University of Texas at Austin](http://james.howison.name)
- Heather Piwowar and Jason Priem, [Impact Story](https://impactstory.org)

[CiteAs.org](https://citeas.org) links between pieces of software and their requested citations. Go from the name of a piece of software, its webpage URL, or a DOI directly to the machine-readable metadata (e.g., BibTex, Zotero auto-import) for the citation the author wants you to use. CiteAs.org is funded by the Digital Science program at the Sloan Foundation (Grant Number 8028), and conceived and developed by Heather Piwowar and Jason Priem at [ImpactStory](https://impactstory.org), together with [James Howison](http://james.howison.name) from the Information School at the University of Texas at Austin.

**Great software work ⟶ Clear requests for citation ⟶ More visibility in publications ⟶ More credit ⟶ Better Software ⟶ Better Research**

Software very rarely contains citation information, and when it does it is certainly not as obvious as it is in a paper. With a paper, if you have the paper you have the metadata right there in front of you. [Howison and Bullard, 2013](http://doi.org/10.1002/asi.23538) found that less than half of the times in which publications actually mentioned software were formal, traceable, citations.

![image: a citation.](an_article_citation.png)

But if you have a piece of software, you very likely don't have the metadata needed to cite it. In part this is because with software there is no standard place to "write" the information, but it's also because authors sometimes want their users to cite something other than the piece of software directly. Examples include citing a paper that introduces the software (or demonstrated its potential), a published software manual or book, a "software paper" created specifically as a citation target, or a benchmarking paper.

Great work is being done to guide best practices (including the [FORCE11 Working Group on Software Citation](https://www.force11.org/group/software-citation-working-group)) which recommends always including a direct citation to the software itself, including version numbers---something key for reproducibility---in addition to papers. We don't disagree, but we think it's important to let the authors decide how their contribution should be acknowledged and to link users with those requests.

One approach to making this link is to create a new standard format and location to make clear requests, such as including a free text request in a [CITATION file](https://www.software.ac.uk/blog/2016-10-06-encouraging-citation-software-introducing-citation-files) or a machine readable set of requests in a [CodeMeta file](https://codemeta.github.io/) or [CITATION.cff file](https://github.com/citation-file-format/citation-file-format) file. These have the advantage of being easy to locate and read, but the disadvantage of requiring everyone to adopt a new practice before this approach can work.

We know that people already make requests for citation in a whole range of places, including requests on project web-pages that provide `bibtex` or DOIs, metadata associated with DOIs or repositories (such as Github and Gitlab), and in language specific formats (such as R's `citation()` method, which reads from a `DESCRIPTION` file).

CiteAs includes a web-scraper that seeks out requests wherever they might be, following a set of logical rules based on how we've seen people ask for a citation. We ask users to start with something they know about the software, such as the project name, a project "landing page" (e.g., [SciPy's requests for citations](https://www.scipy.org/citing.html)), or a project's repository URL. We then have plugins arranged in a sequence that obtain data from out on the web and seek the best citation request, prioritizing metadata by its imputed intentionality, such as `CITATION.cff` file, `CITATION` file, `citation()` calls, `DOAP` metadata, and metadata registered associated with a DOI (e.g., [Zenodo's software DOIs](http://about.zenodo.org/principles/)). Of medium priority is metadata discovered through natural language requests on webpages (such as `bibtex` or other formats on landing pages). Finally we fall back to creating a simple citation to a repository or even web-page.

We want to discover and honor author's requests and simultaneously educate authors about how to make clearer or more specific citation requests, encouraging them to make use of more expressive formats. We do that by showing our discovery process and highlighting missing, higher intentionality, opportunities to make requests.

## Examples

### Example 1: YT

YT is a python package for analyzing and visualizing volumetric data. Entering the YT webpage URL into CiteAs' search field retrieves the correct citation in a variety of different common citation formats as well as in structured data that can be imported into Zotero in one click:

![image: CiteAs result for YT.](https://i.imgur.com/7mZOrCK.png)

Since a key goal of CiteAs is education, the **process used**  to find this citation is also highlighted on the results page:

![image: provenance of yt citation.](https://i.imgur.com/wUnQLSy.png)

From this list we can see the steps the application took to find the citation--which both helps establish provenance and also educate users about best-practice ways (or at least **better-**practice ways) to register and discover software citation metadata.


### Example 2: Stringr

The Stringr package provides wrappers for common string operations in R. Given the URL for the package's CRAN page, CiteAs finds and displays the correct citation for this package. CiteAs takes quite a few hops to finally figure out where the canonical citation metadata is, but it does eventually find it in the R DESCRIPTION file. Again, the display of all these steps helps users understand more about the possible approaches to software citation. The (?) icon next to each step links users to additional documentation.

![image: provenance of stringr citation.](https://i.imgur.com/WWOO8IT.png)



## Challenges and next steps

### Locating requests

Eventually we plan to incorporate an additional source: the manner in which packages are already being mentioned in publications. We plan to obtain this through machine learning of the literature ("entity recognition" for software). Towards this at [Softcite Dataset](https://github.com/howisonlab/softcite-dataset), we have trained content analytic coders labeling a randomly chosen set of publications. Using that system we plan to add "Here's your current request and here's how we see your software mentioned in the literature. If you'd like to change those practices you could start with a clear, standardized, machine-readable request".

### Presenting information

We have encountered plenty of challenges in presenting the requests of a CiteAs query to realize the educational element, including visualizing the search process, dealing with finding multiple different requests. We considered allowing users to "claim" their project and then to mark their preferred citation, but we want to improve existing infrastructure, rather than become infrastructure ourselves. The system will therefore make recommendations about how to write clearer requests that everyone can read, rather than host those requests onsite.

### Sustainability

CiteAs faces a key challenges that any grant-funded piece of software faces: how to continue after the end of the grant. Handling "bit rot" (or ["software collapse"](http://blog.khinsen.net/posts/2017/01/13/sustainable-software-and-reproducible-research-dealing-with-software-collapse/)) will be a challenge, but in addition any web-hosted service has on-going financial needs for server space. Our by-no-means-perfect approach is to demonstrate the feasibility of the approach and seek partners to whom to pass off the service.

## Please try CiteAs and report issues

We would love to hear your experiences with the [CiteAs.org](http://citeas.org) service. We are especially interested in hearing about requests that CiteAs is not currently finding, as well as feedback on the presentation of the results, and the position of CiteAs within the ecosystem of related services.  Report issues on our [GitHub issues page](https://github.com/Impactstory/citeas-webapp/issues).

**Great software work ⟶ Clear requests for citation ⟶ More visibility in publications ⟶ More credit ⟶ Better Software ⟶ Better Research**
