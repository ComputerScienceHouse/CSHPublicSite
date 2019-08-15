# require 'html-proofer'

$outputDir = "./_site"
$testOpts = {
  # An array of Strings containing domains that will be treated as internal urls
  :internal_domains => ["pubsite.a.csh.rit.edu"],
  # Ignore errors "linking to internal hash # that does not exist"
  :url_ignore => ["#"],
  # Allow empty alt tags (e.g. alt="") as these represent presentational images
  :empty_alt_ignore => true,
  # Automatically add extension (e.g. .html) to file paths, to allow extensionless URLs
  :assume_extension => true,
  # LinkedIn blocks connections from html-proofer, ignore 999 error
  :http_status_ignore => [999],
  # SSL seems to be broken on TravisCI, so we'll ignore SSL errors.
  :typhoeus => {
    :ssl_verifypeer => 0,
    :ssl_verifyhost => 0,
  }
}

task :default => ["serve:development"]

desc "cleans the output directory"
task :clean do
  sh "jekyll clean"
end

namespace :build do

  desc "build development site"
  task :development => [:clean] do
    sh "jekyll build --drafts"
  end

  desc "build production site"
  task :production => [:clean] do
    sh "JEKYLL_ENV=production jekyll build --config=_config.yml"
  end
end

namespace :serve do

  desc "serve development site"
  task :development => [:clean] do
    sh "jekyll serve --drafts"
  end

  desc "serve production site"
  task :production => [:clean] do
    sh "JEKYLL_ENV=production jekyll serve --config=_config.yml"
  end
end

# desc "test production build"
# task :test => ["build:production"] do
#   HTMLProofer.check_directory($outputDir, $testOpts).run
# end
