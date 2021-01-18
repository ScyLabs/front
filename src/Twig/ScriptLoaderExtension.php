<?php

namespace App\Twig;

use Symfony\Component\DependencyInjection\ContainerAwareInterface;
use Symfony\Component\DependencyInjection\ContainerAwareTrait;
use Symfony\WebpackEncoreBundle\Asset\EntrypointLookupInterface;
use Symfony\WebpackEncoreBundle\Twig\EntryFilesTwigExtension;
use Twig\Extension\AbstractExtension;
use Twig\TwigFunction;

class ScriptLoaderExtension extends AbstractExtension implements ContainerAwareInterface {
  
  use ContainerAwareTrait;

  public function getFunctions()
  {
      return array(
          new TwigFunction('getScripts',array($this,'getScripts')),
          
      );
  }
  public function getScripts(array $scripts) : string {
    return json_encode($this->buildDeps(array_reverse($scripts)));
  }
  private function buildDeps(array $scripts,$index = 0) {
    if(!isset($scripts[$index]))
      return [];
    $deps = (object)[];
    $deps->src = $scripts[$index];
    $deps->require = [$this->buildDeps($scripts,$index + 1)];
    return $deps;
  }

}