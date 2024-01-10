<template>

  <Header projectLink="https://twon-project.eu/">

    <template v-slot:headline>
      <span>Evaluating LLM-generated social media content</span>
    </template>
    <template v-slot:excerpt>
      To analyze the quality of machine-generated social media content using Large Language Models (LLMs), we ask you to
      evaluate the authenticity of a selection of content.
    </template>

  </Header>

  <main id="main" class="container mx-auto px-4 py-8 lg:py-12">

    <Headline>Step 1: Evaluate the authenticity of posts:</Headline>

    <Paragraph>
      Categorize the authenticity of the following posts one by one. It is not obligatory to answer every sample.
      --!!!-- Add annotation guidelines --!!!--
      You can use the Left and Right Arrow keys inside the box to navigate.
    </Paragraph>

    <Evaluation :samples="samples"/>

    <Divider/>

    <Headline>Step 2: Submit the results</Headline>

    <Paragraph>
      After finishing the evaluation, download your data to your local file system. We save results as a plain-text
      JSON file. Thus, interested ones can examine their file and inspect the collected data. We ask not to modify the
      contents as that would complicate evaluation.
    </Paragraph>

    <Paragraph>
      Finally, upload the received file to the cloud storage provided by the universities of Rhineland-Palatinate.
      We opt for the two stages approach to ensure data transparency and limit the usage of non-education service
      providers.
    </Paragraph>

    <Button :action="download">
      1. Download data
    </Button>
    <a
        class="ml-4 underline underline-offset-8 text-gray-600"
        href="https://seafile.rlp.net/u/d/e2a60cab32854c2d8e7a/"
        target="_blank"
    >
      2. Upload to Cloud
    </a>
  </main>
</template>

<script>
import Headline from "@/components/atoms/Headline.vue"
import Paragraph from "@/components/atoms/Paragraph.vue"
import Button from "@/components/atoms/Button.vue"
import Divider from "@/components/atoms/Divider.vue"

import Header from "@/components/Header.vue"
import Evaluation from "@/components/Evaluation.vue"

import {useEvaluationStore} from '@/store'

import {download_as_JSON} from "@/common"
import samples from './data/samples.json'

export default {
  components: {
    Headline,
    Paragraph,
    Button,
    Divider,
    Header,
    Evaluation
  },
  methods: {
    download() {
      download_as_JSON(useEvaluationStore().getEvaluation)
    }
  },
  data() {
    return {
      samples: samples
    }
  }
}
</script>