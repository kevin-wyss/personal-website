# How I currently think about finding value in AI

In my last post, I wrote about a pattern I had seen across enterprise software implementations: the platform was delivered, the technology worked, but the organization struggled to create value from it afterwards.

My view was that the tool was only one part of the picture. People and process had to be built around it, and I found it more useful to position the platform as a service rather than as a collection of features.

I ended that post by saying it might be worth revisiting the same question for AI.

This is my attempt to do that.

The comparison is not perfect. AI can be used in more ways than a conventional enterprise platform. It can support an individual employee, provide a specialized capability, maintain connected systems, interact with customers, or participate in an end-to-end process.

OpenAI’s article on five AI value models gave me a useful way to separate those different forms of value.[^1] Its framework covers workforce empowerment, AI-native distribution, expert capability, systems and dependency management, and process re-engineering.

I do not read these as five mandatory maturity stages that every organization needs to follow in the same order. I read them as a reminder that “AI adoption” can describe several different activities, with different expectations, economics, and measures of success.

That distinction has helped me refine my own view. I still see teams starting with the model or the tool before defining the result they want. But I also think my previous framing placed too much emphasis on process automation as the destination. Workforce enablement and expert support can create meaningful value without immediately becoming an end-to-end agentic workflow.

The question I would now start with is:

> Which type of AI value are we trying to create, and what should change in the work if we succeed?

## Where I find the five value models useful

The five models describe different ways AI can participate in an organization:

1. **Workforce empowerment:** helping a broad group of employees research, draft, analyze, and complete everyday work.
2. **AI-native distribution:** changing how customers discover, evaluate, or purchase products and services through AI-mediated channels.
3. **Expert capability:** supporting specialized work in areas such as research, engineering, legal, finance, or creative production.
4. **Systems and dependency management:** helping maintain consistency across connected code, policies, documents, and operational artifacts.
5. **Process re-engineering:** using agents and integrated systems to coordinate a workflow across several steps, tools, and decisions.

What I find helpful is that each model suggests a different conversation about value.

A workforce rollout might be assessed through repeated use, reusable workflows, proficiency, and evidence that teams are working differently.

An expert-capability initiative might be assessed through review quality, rework, cycle time, or the number of cases an expert can examine.

A process-re-engineering initiative would need to be assessed through the performance of the whole process: end-to-end cycle time, exception rates, resolution time, compliance, and ownership.

These are related, but they are not interchangeable.

I have seen broad access programs discussed as though they should already be producing fully automated processes. I have also seen agent pilots celebrated because many people tried them, without a clear view of whether the underlying workflow improved.

The value model does not answer every implementation question. It does help make the expectation more explicit.

<!-- VISUAL PLACEHOLDER 1
Suggested graphic: The five AI value models displayed as five distinct paths rather than a simple maturity staircase. Under each model, show its main unit of value and a few relevant measures.
Suggested caption: "AI adoption can create value through different operating models, each requiring different expectations and measures."
-->

## What I think is still missing: the intended outcome

Even after selecting a value model, the organization still needs to define what a useful result looks like.

Consider a legal team that wants to use AI for contract review.

The initial request may be:

> Review this contract.

That sounds clear until the people involved explain what they mean.

Legal may care about indemnification and liability. Finance may care about payment terms. Security may care about breach-notification language. Procurement may care about renewals and termination rights. The commercial owner may mainly want to know what is blocking signature.

The same use case can also sit inside different value models.

Under **workforce empowerment**, a lawyer might use an AI assistant to summarize clauses, compare wording, and prepare a first draft of review notes.

Under **expert capability**, the organization might build a shared contract-review skill that extracts agreed terms, compares them with a playbook, cites the relevant language, and presents deviations to counsel.

Under **process re-engineering**, an agent might collect the contract, retrieve the correct policy, run the review, route low-risk deviations, escalate high-risk issues, update the contract system, and record the final decision.

All three may be useful. They are not the same implementation.

If the organization does not define which outcome it is pursuing, the project can easily become confused. A personal assistant is criticized for not operating like an integrated workflow, or an agent is built where a shared review template would have been sufficient.

Before discussing architecture, I would want to know:

- What artifact, decision, or action should exist at the end?
- Who is responsible for accepting the result?
- Which criteria define an acceptable outcome?
- Which examples represent good and poor work?
- Which measure should change if the capability is useful?

This is the part of AI adoption that I think is often underestimated. The model can work with criteria and examples, but it cannot decide on behalf of the organization what its standards should be.

<!-- VISUAL PLACEHOLDER 2
Suggested graphic: One contract-review use case shown at three levels: individual assistant, shared expert skill, and integrated agentic workflow. Show how the outcome, ownership, integration, and measurement change at each level.
Suggested caption: "The same business activity can support different AI value models."
-->

## Not every use case should become an agent

The practical guide to building agents offers a useful test for when an agent may be appropriate.[^2] It points toward workflows involving complex judgment, difficult-to-maintain rules, or heavy use of unstructured information.

I find this helpful because the word *agent* is often introduced before the workflow has been examined.

Imagine a company evaluating new suppliers.

Each supplier provides a different combination of financial statements, security questionnaires, certificates, contracts, policies, and presentation decks. Important information may be hidden in a footnote, described using different terminology, or missing entirely.

There are parts of this process where a model can be useful:

- reading and classifying inconsistent documents,
- extracting information into a shared structure,
- interpreting ambiguous answers,
- identifying missing evidence,
- and explaining why a supplier may present an unusual risk.

There are other parts where I would prefer conventional software:

- calculating financial ratios,
- checking whether a required certificate is present,
- applying an agreed threshold,
- matching the supplier against an existing record,
- and enforcing access permissions.

An agent may be useful when the system needs to decide which document to inspect next, which tool to call, whether it has enough information, or when the case should be handed to a person.

A possible workflow might be:

> **Supplier documents → model-based extraction → structured record → deterministic checks → contextual assessment → human decision → recorded outcome**

The agent guide describes the core design in terms of a model, tools, and instructions. From an adoption perspective, I would add ownership, evaluation, guardrails, and human intervention to the same picture.

The guide also recommends beginning with a simpler orchestration pattern and introducing multiple agents only when the logic or toolset becomes difficult to manage. That matches how I would approach the implementation. I would rather understand one bounded workflow and its failure modes before distributing the work across several agents.

Human intervention is particularly important where actions are difficult to reverse or where repeated failure indicates that the system no longer understands the case. In the supplier example, the system may prepare and route a recommendation. I would still expect a person to approve a high-risk supplier or an exception to policy.

<!-- VISUAL PLACEHOLDER 3
Suggested graphic: A hybrid supplier-review workflow. Distinguish model-driven steps, deterministic software, and human decisions. Mark the points where the agent can choose tools and the points where approval is mandatory.
Suggested caption: "One possible division of responsibility between models, software, agents, and people."
-->

## The operating model I would put around it

In my enterprise-software work, a use-case intake process helped move customers away from searching aimlessly for value inside a tool.

I think a similar mechanism could help with AI, although I would structure it around two different lanes.

### Lane 1: Workforce enablement

This lane would support broad experimentation and practical fluency.

It could include role-based training, a champions network, approved tools, example workflows, reusable instructions, and a place for employees to share what worked.

The objective would not be to turn every useful prompt into an IT project. It would be to help people use AI competently and to identify repeated patterns in the work.

A finance analyst may develop a useful way to compare monthly commentary with actual performance. A recruiter may create a better process for preparing interview packs. A service manager may use AI to organize incident-review notes.

Most of these can remain employee workflows.

Some will appear repeatedly across teams. Those are candidates for the second lane.

### Lane 2: Shared capabilities and process change

This lane would handle ideas requiring shared data, system access, governed instructions, repeatable quality, or workflow execution.

I would expect an intake record to include:

- the AI value model being pursued,
- the intended outcome,
- the owner and users,
- the information and tools required,
- the parts handled by models and deterministic software,
- the evaluation method,
- the human decision points,
- and the operational measure expected to change.

The purpose of the intake is not to make every idea bureaucratic.

Part of its value is in what it stops.

A request for a multi-agent procurement system may turn out to be a good document-extraction skill and a standard review form. A proposed legal agent may first need an agreed playbook. A broad productivity initiative may not need integration at all, but it may need better role-based examples and management support.

Over time, a useful employee workflow could move into the shared-capability lane. If it becomes stable and repeatable, it could become a service or skill that the organization maintains.

That progression might look like:

> **Individual practice → shared workflow → governed capability → integrated process**

I do not expect every use case to move through all four stages. The progression is useful because it gives the organization a way to increase investment as the evidence and operational need become clearer.

<!-- VISUAL PLACEHOLDER 4
Suggested graphic: A two-lane AI operating model.
Lane 1: Workforce enablement, with broad access, champions, examples, and reusable workflows.
Lane 2: Shared capability, with value checkpoint, design, evaluation, controls, and operational ownership.
Show proven employee workflows graduating into the shared-capability lane.
Suggested caption: "A possible operating model for moving from individual AI use to maintained organizational capabilities."
-->

## Measuring the value that was actually intended

One risk I see is the use of a single measurement approach for every AI initiative.

Time saved is useful, but it does not tell the whole story.

For workforce empowerment, I would want to understand whether usage becomes repeated and role-specific, whether practices are shared, and whether the output remains acceptable.

For expert capability, I would look at quality, rework, throughput, and whether experts can examine cases that were previously excluded because of time.

For systems and dependency management, I would care about safe change, traceability, consistency, and the effort required to resolve conflicts.

For process re-engineering, I would measure the complete workflow, including the exceptions that still require people.

The value measure should follow from the value model and the intended outcome. Otherwise, the organization can collect a large amount of AI activity data without learning whether the work improved.

## My current reflection

OpenAI’s five value models made me adjust part of my original view.

I previously drew a strong distinction between using AI to generate answers and using it to redesign a process. I still find that distinction useful, but I now think it can hide valuable work in between.

Broad employee enablement can build practical experience and surface use cases. Expert capabilities can improve important work without taking control of the whole process. Systems and dependency management can create value through consistency and control rather than through a visible front-end assistant.

At the same time, my underlying concern remains.

Giving people access to AI does not define the value by itself. Building an agent does not define the process it should run. A technically capable system can still be attached to an unclear outcome, missing standards, or no operational owner.

The questions I currently use are:

1. **Which AI value model are we pursuing?**
2. **What should change in the work?**
3. **What does an acceptable result look like?**
4. **Does this require an assistant, a shared skill, conventional automation, or an agent?**
5. **Who owns the outcome, the exceptions, and the improvement cycle?**

I expect this view to evolve as I see more organizations move beyond experimentation.

For now, it helps me separate three conversations that are often mixed together: where the value should come from, how the work needs to change, and which technology is appropriate for implementing that change.

---

[^1]: OpenAI, [*The five AI value models driving business reinvention*](https://openai.com/index/the-five-ai-value-models-driving-business-reinvention/), March 2026.

[^2]: OpenAI, [*A practical guide to building agents*](https://openai.com/business/guides-and-resources/a-practical-guide-to-building-ai-agents/).
