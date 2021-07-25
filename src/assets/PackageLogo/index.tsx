import React, { SVGAttributes } from 'react';

type PackageLogoProps = SVGAttributes<HTMLOrSVGElement>;

export function PackageLogo({ ...props }: PackageLogoProps): JSX.Element {
  return (
    // <?xml version="1.0" encoding="iso-8859-1"?>
    // <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
    <svg
      version="1.1"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      // xmlns:xlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      viewBox="0 0 511.984 511.984"
      // style="enable-background:new 0 0 511.984 511.984;"
      xmlSpace="preserve"
      {...props}
    >
      <polygon
        // style="fill:#F6BB42;"
        style={{ fill: '#F6BB42' }}
        points="405.315,10.656 106.66,10.656 0,117.325 0,192.652 511.984,207.221 511.984,117.325 "
      />
      <rect
        y="117.328"
        style={{ fill: '#FFCE54' }}
        width="511.98"
        height="384"
      />
      <polygon
        style={{ fill: '#E6E9ED' }}
        points="298.647,10.656 213.321,10.656 191.986,117.325 319.99,117.325 "
      />
      <polygon
        style={{ fill: '#F5F7FA' }}
        points="319.99,213.322 298.647,223.987 277.319,213.322 255.984,223.987 234.657,213.322
	213.321,223.987 191.986,213.322 191.986,117.325 319.99,117.325 "
      />
      <g>
        <path
          style={{ fill: '#434A54' }}
          d="M159.987,394.637H53.326c-5.891,0-10.664,4.781-10.664,10.688c0,5.875,4.773,10.656,10.664,10.656
		h106.661c5.891,0,10.671-4.781,10.671-10.656C170.658,399.418,165.878,394.637,159.987,394.637z"
        />
        <path
          style={{ fill: '#434A54' }}
          d="M106.66,437.323H53.326c-5.891,0-10.664,4.75-10.664,10.656c0,5.875,4.773,10.656,10.664,10.656
		h53.334c5.891,0,10.664-4.781,10.664-10.656C117.324,442.073,112.551,437.323,106.66,437.323z"
        />
      </g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
      <g></g>
    </svg>
  );
}
