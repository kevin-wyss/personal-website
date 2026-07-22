# Two Structural Challenges I See in AI Adoption

MIT Project NANDA’s 2025 report on enterprise AI became a useful reference point for the gap between experimentation and measurable business value.[^1] Much of its assessment matches what I have seen in AI adoption work.

My own view is that two additional issues often sit underneath stalled pilots.

The first is a **specification problem**: teams begin using AI before they have clearly defined the result they are trying to produce.

The second is a **systems problem**: teams try to create complex, agent-like behavior through prompting when the use case may be better served by a more explicit combination of models, software, workflow, and human review.

## Starting without a definition of “good”

Imagine an investment analyst asking an AI assistant:

> Is this company a good investment?

The model can produce a plausible analysis covering the usual dimensions, while still missing what matters to the analyst.

The issue is the word **good**.

Good for a venture fund seeking asymmetric upside? A pension fund protecting principal? A dividend investor? A private-equity buyer?

Without more direction, the model has to infer the objective and may produce a conventional analysis rather than apply the analyst’s actual philosophy.

A more useful request might be:

> Evaluate this company as a five-year investment. Favor markets larger than $10 billion, net debt below two times EBITDA, recurring revenue above 60%, positive free-cash-flow margins, and declining customer concentration. Flag valuations requiring revenue growth above 25% for more than three years. Identify the three assumptions most likely to break the thesis.

This version gives the model a definition of good, a set of constraints, failure conditions, and a requested output.

I see the same issue in less extreme examples.

“Review this contract” sounds specific, but it can mean different things to different people. Legal may care about indemnification, finance about payment terms, security about breach notifications, and procurement about automatic renewals.

If I were designing that workflow, I would define what to extract, which playbook to use, how to classify deviations, when to escalate, and how to record the final decision. That turns a general conversation into a repeatable review process.

A rough model I use when thinking about applied AI is:

> **AI value ≈ model capability × task specification × relevant context × workflow integration × feedback**

I do not see this as a literal formula. It reminds me that model quality is only one part of the outcome. In the use cases I have worked with, a strong model has not been enough when the task was vague, context was missing, or the output never entered an operational process.

<!-- VISUAL PLACEHOLDER 1
Suggested graphic: A five-part multiplicative equation showing Model Capability, Task Specification, Context, Workflow Integration, and Feedback. Show how one weak factor can constrain the overall result.
Suggested caption: "A working model for the factors that shape applied-AI value."
-->

This is why I distinguish between distributing access to an AI assistant and changing how work gets done. The first may support individual experimentation. The second requires a clearer understanding of the activity, its standards, and its place in a broader workflow.

## Defining “good” is implementation work

One pattern I have noticed is that an AI project often exposes how little of an organization’s decision-making has been made explicit.

A team may expect to connect a model to its documents and quickly automate part of the work, then discover that the process depends on policies, examples, exceptions, and conventions that were never written down. I see that discovery as part of the implementation.

Much of knowledge work depends on tacit definitions of quality. People learn these definitions by watching how experienced colleagues work, observing which exceptions are accepted, and seeing what gets revised or rejected.

A model does not enter the organization with that experience.

This is also why I often find examples more useful than broad instructions.

“Write an executive-ready update” gives the model limited guidance. A small collection of strong examples may reveal that the update should lead with the required decision, distinguish facts from assumptions, quantify the issue, name an owner, and avoid unnecessary project history.

The harder part is deciding which examples represent the standard the organization wants to reproduce.

## When the prompt starts carrying the workflow

Once teams recognize the need for context, the natural reaction is to add more of it to the prompt.

The first version may be five lines. Later versions include policies, examples, exceptions, tool instructions, output schemas, escalation rules, definitions, conversation history, and warnings about common failure modes.

At some point, the prompt begins to carry responsibilities that I would normally expect to see in the surrounding system.

I have seen this happen most often when teams are trying to create agentic behavior. The model is given a growing number of instructions, tools, and decisions to manage within one interaction.

The difficulty appears when documents conflict, instructions are missed, assumptions carry into later steps, or the team cannot locate the source of an incorrect result.

In those situations, my first reaction is not necessarily to add more prompting or seek a more autonomous model. I would first look at whether the workflow needs to be decomposed more clearly.

<!-- VISUAL PLACEHOLDER 2
Suggested graphic: A small prompt expanding into policies, examples, exceptions, tools, schemas, and conversation history until it begins functioning as an overloaded architecture.
Suggested caption: "A prompt can gradually take on responsibilities that may be easier to manage elsewhere."
-->

## Using models for the parts that remain fuzzy

Consider a company evaluating suppliers.

Each supplier may submit a different mix of decks, financial statements, security questionnaires, certificates, contracts, and policy documents. Terminology varies, and important information may appear in tables, footnotes, or scanned PDFs.

This is where I find language models particularly useful: identifying relevant passages, normalizing inconsistent language, and extracting information into a common structure.

I would not necessarily keep every subsequent step inside the model.

Debt ratios can be calculated in code. Certifications can be checked using defined rules. Thresholds can be evaluated programmatically. Workflow software can route the case to the appropriate reviewer.

The model can return where contextual interpretation is helpful: assessing ambiguous evidence, explaining an unusual risk, or summarizing trade-offs.

A possible workflow could look like this:

> **Documents → model-based extraction → structured record → deterministic checks → contextual assessment → human approval → recorded decision**

I prefer this design because the responsibilities are easier to inspect and test. My general approach is to use the model where inputs are variable or judgment is hard to express as logic, and normal software where the rules are already clear.

<!-- VISUAL PLACEHOLDER 3
Suggested graphic: A hybrid workflow with model-driven, deterministic, and human-controlled steps visually distinguished.
Suggested caption: "One possible division of responsibilities in a hybrid AI workflow."
-->

## Building the recurring workflow

Suppose a regional operations leader receives twenty-five presentation decks every Friday.

Each location reports revenue, staffing, customer issues, inventory, safety incidents, and upcoming risks. The templates are similar but not identical.

The leader spends part of Monday finding the relevant slides, copying numbers into a spreadsheet, comparing them with the previous week, and writing follow-up questions.

One approach would be to upload the decks into a chatbot and ask:

> What should I know?

That may generate a useful summary. My concern is that it leaves much of the recurring process unchanged.

I would instead explore a small operating-review pipeline:

1. Watch a folder for new decks.
2. Extract defined metrics and preserve references to the source slides.
3. Compare results with prior periods and agreed thresholds.
4. Generate possible explanations for unusual movements.
5. Assemble an exception report for human review.
6. Record corrections for the next run.

Here, the benefit would come from reducing a recurring coordination burden rather than producing a single good answer.

“Build” also need not mean training a model or creating a large platform. It may be a script, a schema, a scheduled workflow, a review screen, a small evaluation set, and a clearly assigned owner.

Models can also help create these components by generating extraction logic, connectors, interfaces, tests, and debugging tools.

<!-- VISUAL PLACEHOLDER 4
Suggested graphic: Before and after.
Before: 25 decks → manual reading → spreadsheet copying → follow-up drafting.
After: 25 decks → extraction → comparison → exception report → human review.
Suggested caption: "A scenario for redesigning a recurring operating-review process."
-->

## Agentic does not have to mean fully autonomous

The word *agent* is often used to describe a digital worker that receives an objective, forms a plan, operates tools, corrects itself, and returns when the job is complete.

I think that framing can set an unnecessarily high bar for many enterprise use cases.

A useful system may only need to maintain state, retrieve references, choose among limited actions, recognize low confidence, request approval, and record the outcome.

A procurement agent, for example, may not need the freedom to redesign sourcing strategy. It might collect supplier information, identify missing documents, assess defined risks, draft a recommendation, and route the case.

I would still consider that meaningfully agentic, while keeping the scope bounded enough to inspect and control.

## Making skills visible

This is why I find the idea of AI **skills** promising.

I think of a skill as a named capability with defined inputs, references, outputs, and feedback. It is more specific than a general assistant and more reusable than a one-off prompt.

For example:

> **Skill: Assess supplier financial risk**  
> **Inputs:** Financial statements, debt schedule, company profile  
> **References:** Risk policy, sector benchmarks, prior approved assessments  
> **Output:** Risk rating, evidence, uncertainty, recommended next step  
> **Human gate:** Required for high-risk or low-confidence cases  
> **Feedback:** Final decision and corrections

One gap I see is that these skills are often hidden inside prompts, repositories, and configuration files. Business leaders describe the work in terms of responsibilities, standards, approvals, and exceptions.

I think an effective interface for nontechnical teams should represent skills in those terms.

A visual map might show:

> **Read quarterly deck → Extract metrics → Compare with plan → Explain variance → Draft follow-up questions**

Each skill could expose its inputs, standards, owner, confidence threshold, and human checkpoint.

A business leader could then identify that the comparison step is using the annual budget instead of the latest forecast. That is much easier to act on than a general complaint that the agent produced a strange answer.

Making skills visible could also reveal where a capability can be reused across other workflows.

## Measuring changes in the work

Another issue I have seen is that AI pilots are easy to demonstrate but harder to evaluate.

A generated answer appears on screen, the group agrees that it looks promising, and the pilot moves forward without a clear baseline.

I would rather connect the initiative to an observable measure of work: cycle time, cases handled per employee, error rates, escalations, external service spending, response time, or decision consistency.

“Generate better marketing copy” is visible and easy to demonstrate.

“Reduce the time required to reconcile disputed invoices across five systems” is less visible, but it may have a clearer operational value.

In my experience, some of the more promising opportunities sit inside processes that are repetitive but not fully standardized and that involve enough unstructured information to make conventional automation difficult.

## Five questions I would ask before the next pilot

Before launching another AI initiative, I would ask:

1. **What exact outcome should exist at the end?**
2. **What does good look like, and which examples represent it?**
3. **Which steps genuinely benefit from a model?**
4. **Where is human review required, and what evidence should the reviewer see?**
5. **How will corrections be recorded and the system improved?**

Clear answers do not guarantee a successful implementation. They do, however, make it easier to determine what should be built and how it should be evaluated.

## My current view

I do not think the most useful distinction is between organizations with advanced agents and those with basic chatbots.

The more useful distinction, in my view, is between using AI primarily to generate answers and using it as one component in redesigning a process.

The latter requires a defined outcome, relevant context, a division of responsibility between models and software, and a way to capture human judgment.

The question I find most useful is therefore not only:

> How do we get an agent to do this?

It is also:

> What would a reliable process for this activity look like, and where would a model be genuinely useful within it?

That is the lens I currently use when evaluating AI adoption opportunities.

---

[^1]: MIT Project NANDA, *The GenAI Divide: State of AI in Business 2025*. [View the report](https://mlq.ai/media/quarterly_decks/v0.1_State_of_AI_in_Business_2025_Report.pdf)
