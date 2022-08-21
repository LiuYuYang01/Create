import React from 'react';
import clsx from 'clsx';
import styles from './HomepageFeatures.module.css';

const FeatureList = [
  {
    title: '简单易用',
    Svg: require('../../static/img/undraw_docusaurus_mountain.svg').default,
    description: (
      <>
        Docusaurus从头开始设计，易于安装，并用于使您的网站快速启动和运行。
      </>
    ),
  },
  {
    title: '专注于重要的事情',
    Svg: require('../../static/img/undraw_docusaurus_tree.svg').default,
    description: (
      <>
        Docusaurus让你专注于你的文档，我们会做家务。继续将您的文档移动到目录中。
      </>
    ),
  },
  {
    title: '由React提供动力',
    Svg: require('../../static/img/undraw_docusaurus_react.svg').default,
    description: (
      <>
        通过重用 React 来扩展或自定义您的网站布局。Docusaurus可以在重复使用相同的页眉和页脚的同时进行扩展。
      </>
    ),
  },
];

function Feature({Svg, title, description}) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <Svg className={styles.featureSvg} alt={title} />
      </div>
      <div className="text--center padding-horiz--md">
        <h3>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
